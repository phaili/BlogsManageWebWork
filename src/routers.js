import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'
import ShowBlog from './components/ShowBlog'
import EditBlog from './components/EditBlog'
import REPORT from './components/结业报告'
export default[
    {path:"/", component:ShowBlogs},
    {path:"/add", component:AddBlog},
    {path:"/blog/:id",component:ShowBlog},
    {path:"/edit/:id",component:EditBlog},
    {path:"/report",component:REPORT},
]