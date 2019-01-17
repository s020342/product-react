import Home from 'view/home'
import One from 'view/home/one'
import Two from 'view/home/two'
import Branch from 'view/branch'
import Flicking from 'view/flicking'
import Progress from 'view/progress'
import Servers from 'view/servers'
const Routes=[
    {
        path:'/home',
        component:Home,
        children:[
            {
                path:'/home/one',
                component:One
            },
            {
                path:'/home/two',
                component:Two
            }
        ]
    },
    {
        path:'/branch',
        component:Branch
    },
    {
        path:'/flicking',
        component:Flicking
    },
    {
        path:'/progress',
        component:Progress
    },
    {
        path:'/servers',
        component:Servers
    }
    
]
export default Routes;
