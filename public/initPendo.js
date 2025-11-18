(function(apiKey){
    (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
    v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
        o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
        y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo-dap.pendo-dev.com/agent/static/'+apiKey+'/pendo.js';
        z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');

        pendo.initialize({
            visitor: {
                id: 'jingjing-jacobson',
                email: 'jingjing.jacobson@pendo.io',
                full_name: 'JingJing Jacobson',
            },

            account: {
                id: 'foo',
                name: 'bar'
            }
        });
})('be9115b4-b2b0-4380-712c-694fbdea2a4');
// 4fb836bc-2c26-4b7b-aaea-c3f3c8ca25d6 dap jj single sub app
// 3337dc19-532e-4346-53c1-094ce36a3dd8 dev jingjing-test
// be9115b4-b2b0-4380-712c-694fbdea2a4b dap jining-adopt