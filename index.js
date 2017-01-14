module.exports = (options) => {
    const implicit = (options && options.implicit == false) ? false : true;
    
    return (style) => {
        style.include(__dirname);
        
        if (implicit) {
            style.import('line-clamping'); 
        }
    }
}
