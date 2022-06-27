import { useEffect,useState } from 'react'

import '../cadastrar/app.scss'

import { cadastrarHeroi, listarHeroi, removerHeroi } from '../api/provaAPI'

export default function Index() {
    const [nome,setNome] = useState = ('');
    const [superPoder,setSuperPoder] = useState ('');
    const [voa,setVoa] = useState (false);
    const [heroi,setHeroi] = useState ('');
}

async function listarTodos {
    const resp = await listarHeroi();
     setHeroi(resp)
}

useEffect (() => {
    listarTodos();
}

)

async function botao {
    try {
        await cadastrarHeroi (nome,superPoder,voa)
    }
    catch {
        await(err)
        (err); 'Heroi não cadastrado';
    }
}


async function remover {
    try {
        await removerHeroi ()

    }
}
