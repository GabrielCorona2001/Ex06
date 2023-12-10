import { Routes, Route } from 'react-router-dom'
import { Wrapper } from "../components/Wrapper/index"
import { List } from "../pages/list/index"
import { Home } from "../pages/home/index"

export function AuthRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Wrapper children={<Home></Home>}></Wrapper>}></Route>
            <Route path='/list' element={<Wrapper children={<List></List>}></Wrapper>}></Route>

        </Routes>

    )
}