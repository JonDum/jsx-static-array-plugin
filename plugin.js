module.exports = function(babel) {
    const { types: t } = babel;

    const StaticArray = (args) => {
        return t.newExpression(t.Identifier("StaticArray"), args)
    }

    return {
        visitor: {
            ArrayExpression(path) {
                let fp = path.getFunctionParent();

                const isInRenderFunc = (fp.node.id.name == 'render');
                const isReturnedDirectly = path.parent.type == 'ReturnStatement';
                const isNotTransformed = path.parent.type !== "CallExpression";
                //const isDirectJSXExpression = path.parent.type == "JSXExpressionContainer";
                //const isJSXExpression = path.findParent(p => p.node.type == "JSXExpressionContainer")

                if (isInRenderFunc && (isReturnedDirectly || isNotTransformed)) {
                    path.replaceWith(StaticArray(path.node.elements));
                }
            }
        }
    };
}
