import Content from "./Content";
import SideBar from "./SideBar";

export default function Layout(){
    return ( 
        <div className="relative md:flex h-100vh w-100vh bg-white">
            <SideBar></SideBar>
            <Content></Content>
        </div>
    )
}