import { BrowserRoter, Routes, Route } from 'react-router-dom' 

import Cadastrar from './pages/cadastrar/app.js'

export default function Index() {
    return (
        <BrowserRoter>
            <Routes>
                <Route path='/' element = {<cadastrar/>}/>
            </Routes>
        </BrowserRoter>
    )
}

export default function Index() {
    return (
        <BrowserRoter>
            <Routes>
                <Route path='/' element = {<consultar/>}/>
            </Routes>
        </BrowserRoter>
    )
}

export default function Index() {
    return (
        <BrowserRoter>
            <Routes>
                <Route path='/' element = {<remover/>}/>
            </Routes>
        </BrowserRoter>
    )
}