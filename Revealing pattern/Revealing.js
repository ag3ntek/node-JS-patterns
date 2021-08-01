const myModule = (() => {
    const privateVar = [];
    const privateFunct = () => {};

    const exported = {
        publicExportedVar: [],
        publicExportedFunction: () => {}
    }

    return exported;
})();

console.log(myModule);
console.log(myModule.privateFunct, myModule.privateVar);