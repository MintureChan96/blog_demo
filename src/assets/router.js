import ShowBlogs from "../components/ShowBlogs";
import AddBlog from "../components/AddBlog";
import SingeBlog from "../components/SingeBlog";

export default [
  {path:'/',component:ShowBlogs},
  {path:'/add',component:AddBlog},
  {path:'/detail/:id',component:SingeBlog}
]
