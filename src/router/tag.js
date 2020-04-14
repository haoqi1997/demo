 const tag = [{


     children: [{
             path: 'tagone',
             component: () =>
                 import ('../views/tag/Tagone.vue')

         },
         {
             path: 'tagtwo',
             name: 'tagtwo',
             component: () =>
                 import ('../views/tag/Tagtwo.vue')


         }
     ]
 }]
 export default tag