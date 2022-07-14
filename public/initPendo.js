(function(apiKey){
    (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
    v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
        o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
        y=e.createElement(n);y.async=!0;y.src='https://pendo-dev-static.storage.googleapis.com/agent/static/'+apiKey+'/pendo.js';
        z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');

        pendo.initialize({
            visitor: {
                id: 'visitor-934',
                email: 'visitor934@test.com',
                full_name: 'Test Test',
            },

            account: {
                id: 'ACC934',
                name: 'Acc934'
            }
        });
})('3337dc19-532e-4346-53c1-094ce36a3dd8');