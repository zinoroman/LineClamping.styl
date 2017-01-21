module.exports = (options) => {
    const implicit = (options && options.implicit == false) ? false : true;
    
    return (style) => {
        style.include(__dirname);
        
        style.define('get-calc-inner-value', (calcLiteral) => {
            const calcInnerValue = calcLiteral.val.trim().slice(5, -1);
            
            return new style.nodes.Literal(calcInnerValue);
        });
        
        if (implicit) {
            style.import('line-clamping'); 
        }
    }
}
