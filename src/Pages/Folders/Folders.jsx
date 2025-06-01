import { context } from "../../App"
import { db } from "../../Firebase/Firebase"
import s from "./Folders.module.css"
import { useContext, useEffect, useRef, useState } from "react"


const Folders = () => {
    const {setPages} = useContext(context)
    const folderInputRef = useRef(null)

    const [renameFolderInput, setRenameFolderInput] = useState(null)
    const [renamedFolder, setRenamedFolder] = useState(null) 
    const [openFile, setOpenFile] = useState(false)

    const [selecting, setSelecting] = useState(false)
    const [showFolderInput, setShowFolderInput] = useState(false)
    
    const [folderPath, setFolderPath] = useState("Folders/")

    const [folders, setFolders] = useState([
        {name: "School Works", dateCreated: null, isSelected: false, id: 839259432, type: "folder", path: "Folders/"},
        {name: "Office Works", dateCreated: null, isSelected: false, id: 395732794, type: "folder", path: "Folders/"},
        {name: "Home Works", dateCreated: null, isSelected: false, id: 328584320, type: "folder", path: "Folders/"},
        {name: "Mga kakupalan", dateCreated: null, isSelected: false, id: 324325343, type: "folder", path: "Folders/School Works/"}
    ])
    const [openedFolder, setOpenedFolder] = useState([])
    const [currentOpenedPath, setCurrentOpenedPath] = useState([
        {name: "Folders", path: "Folders/"}
    ])
    const [selectedFoldersId, setSelectedFoldersId] = useState([])


// Functions

    function handleChecking(folder){
        let foldersData = folders
        let sortSelectedFolders= [] 

        for(let ind in foldersData){
            if(folder.id == foldersData[ind].id) 
                foldersData[ind].isSelected = foldersData[ind].isSelected ? false :  true
        }

        for(let i in folders) {
            if(folders[i].isSelected) {
                sortSelectedFolders.push(folders[i].id)
            }
        }
        console.log()
        setSelectedFoldersId([...sortSelectedFolders])
        setFolders([...foldersData])
    }

    function handleSelectingAll(bool){
        setFolders(prev => prev.map((folder)=>{
            return {...folder, isSelected: bool ? true : false}
        }))

        let getFolders = folders
        let sortSelectedFolders = []
        for(let i in getFolders) {
            getFolders[i].isSelected = bool ? true : false
            bool ? sortSelectedFolders.push(getFolders[i].id) : null
        }


        setSelectedFoldersId([...sortSelectedFolders])
    }

    function createFolder(element){
        console.log(folderPath)
        const folderObject = {
            name: element.target.value, 
            dateCreated: null, 
            isSelected: false, 
            id: Math.floor(Math.random() * 1000000),
            type: "folder",
            path: folderPath
        }
        const elemVal = element.target.value
        const elemKey = element.key 

        if(elemKey == "Enter") {
            elemVal != "" ?
            setFolders(prev => [folderObject, ...prev]) :
            setShowFolderInput(false)
            

            setShowFolderInput(false)
            element.target.value = ""
        }
        
    }

    function deleteSelectedFolder(){
        let getFolders = folders

        for(let i in selectedFoldersId) {
            for(let j in getFolders) {
                if(selectedFoldersId[i] == getFolders[j].id) {
                    getFolders.splice(j, 1)
                }
            }
        }

        setSelectedFoldersId([])
        setFolders([...getFolders])
    } 

    function handleRenameFolder(element, folderArg){
        const elemVal = element.target.value
        const elemKey = element.key

        console.log(folderArg.name)
        if(elemKey == "Enter") {
            if(elemVal != "") {
                setFolders(prev => prev.map((folder)=>
                    folderArg.name == folder.name ?
                    {...folder, name: elemVal} :
                    {...folder}
                ))
            } else {
                setRenamedFolder(null)
            }

            setRenameFolderInput(null)
        } 
    }

    function GoToFolderShortCut(folder) {
        let filesAndFolders = []
        let paths = currentOpenedPath

        for(let i in folders) {
            if(folders[i].path == folderPath) filesAndFolders.push(folders[i])
        }

        for(let i in currentOpenedPath) {
            if(currentOpenedPath[i].path == folder.path) {
                for(let j = currentOpenedPath.length - 1; j != i; j--) {
                    paths.splice(j, 1)
                }
                break
            }
        }

        setCurrentOpenedPath([...paths])
        setOpenedFolder([...filesAndFolders])
    }

    function handleOpeningOfFolder(folder){
        if(folder?.name)setFolderPath(folderPath + folder?.name + "/")
        setCurrentOpenedPath(prev => [...prev, {name: folder?.name, path: folder?.path + folder?.name + "/"}])
        let filesAndFolders = []
        for(let i in folders) {
            if(folders[i].path == folderPath) filesAndFolders.push(folders[i])
        }
        setOpenedFolder([...filesAndFolders])
    }

    // Effects

    useEffect(()=>{
        if(folderPath != "") {
            let filesAndFolders = []

            for(let i in folders) {
                if(folders[i].path === folderPath) {
                    filesAndFolders.push(folders[i])
                }
            }

            console.log(folders)

            setOpenedFolder([...filesAndFolders])
        }
    },[folderPath, folders])

    useEffect(()=>{
        setPages(prev => prev.map((p)=>{
            if(p.name === "Folders") return {...p, ind: true}

            return{...p}
        }))
    },[])

    // Component


    return (
        <>
            <div className={s.foldersWrapper}>
                <FoldersNav 
                    createFolder={createFolder} 
                    setShowFolderInput={setShowFolderInput} />
                {
                    selecting ? 
                    <FoldersBottomNav 
                        selecting={selecting} 
                        setSelecting={setSelecting} 
                        handleSelectingAll={handleSelectingAll}
                        deleteSelectedFolder={deleteSelectedFolder} /> : 
                    <div className={s.foldersBottomNav}>
                        <button onClick={()=>{setSelecting(true)}}>Select Folders</button>
                    </div>
                }
                <div className={s.foldersBox}>
                    <div className={s.folderPathWrapper}>
                        <h3>{
                            currentOpenedPath.map(folder => 
                                folder.path == "Folders/" ?
                                <span key={folder.name + folder.path}>
                                    <span onClick={()=>{setFolderPath(folder.path), GoToFolderShortCut(folder)}}>{folder.name} </span>
                                </span> :
                                <span key={folder.name + folder.path}>
                                    / <span onClick={()=>{setFolderPath(folder.path), GoToFolderShortCut(folder)}}>{folder.name} </span>
                                </span>
                            ) 
                        }</h3>
                    </div>
                    <div className={showFolderInput ? s.folderInput : s.hideFolderInput}>
                        <i className="fa fa-folder"></i>
                        <input 
                            type="text"
                            ref={folderInputRef}
                            id="folderInput"
                            onBlur={()=>{
                                setShowFolderInput(false)
                                folderInputRef.current.value = ""
                            }}
                            onKeyDown={(e)=>{
                                createFolder(e)
                            }} />
                        <i 
                            className={`fa fa-close ${s.close}`}
                            onClick={()=>{setShowFolderInput(false)}}></i>
                    </div>
                    {openedFolder?.map((folder, i) => 
                        <label 
                            htmlFor={renameFolderInput != null ? folder.id : null}
                            className={folder.isSelected ? `${s.selected} ${s.folder}` : `${s.folder}`} 
                            key={folder.name}
                            onDoubleClick={()=>{
                                if(!selecting) {
                                    setRenameFolderInput(folder.name)
                                    setRenamedFolder(folder.id)
                                }
                            }} >

                            <input type="checkbox"
                                    style={selecting ? 
                                        {display: "block"} :
                                        {display: "none"}
                                    }
                                    checked={folder.isSelected ? true : false}
                                    onChange={()=>{
                                        if(selecting) handleChecking(folder)
                                    }} />
                            <i className="fa fa-folder"></i>
                            {
                                renameFolderInput != null &&
                                renamedFolder == folder.id ?
                                <input 
                                    id={folder.id}
                                    type="text"
                                    value={renameFolderInput}
                                    onKeyDown={(e)=>{
                                        handleRenameFolder(e, folder)
                                    }}

                                    onBlur={()=>[
                                        setRenameFolderInput(null),
                                        setRenamedFolder(null)
                                    ]}
                                    
                                    onChange={(e)=>{
                                        setRenameFolderInput(e.target.value)
                                    }}/> :
                                <span>{folder.name}</span>
                            }
                            <button 
                                className={s.open}
                                onClick={()=>{
                                    folder.type === "folder" ? handleOpeningOfFolder(folder) : setOpenFile(true)
                                }}>
                                    Open
                            </button>
                        </label>
                    )}
                </div>
                
            </div>
        </>
    )
}

// Nav Component 

const FoldersNav = ({ setShowFolderInput }) => {
    return <div className={s.foldersNav}>
                <h1>Folders</h1>
                <div className={s.right}>
                    <button 
                        onClick={()=>{setShowFolderInput(true)}}>
                        <label htmlFor="folderInput">Create</label>
                    </button>
                </div>
                <span className={s.horizontalLine}></span>
            </div>

}

const FoldersBottomNav = ({deleteSelectedFolder, setSelecting, handleSelectingAll}) => {
    

    return <div className={s.foldersBottomNav}>
                <div className={s.left}>
                    <button onClick={()=>{handleSelectingAll(true)}}>
                        <i className="fa fa-check"></i>
                        <span className={s.fullContent}>Select All</span>
                    </button>
                    <button onClick={()=>{handleSelectingAll(false)}}>
                        <i className={`${"fa fa-check-square"} ${s.uncheck}` }></i>
                        <span className={s.fullContent}>Unselect All</span>
                    </button>
                </div>
                <div className={s.right}>
                    <button onClick={()=>{deleteSelectedFolder()}}>
                        <i className="fa fa-trash"></i>
                        <span className={s.fullContent}>Delete</span>
                    </button>
                    <button onClick={()=>{setSelecting(false), handleSelectingAll(false)}}>
                        <i className="fa fa-close"></i>
                        <span className={s.fullContent}>Cancel</span>
                    </button>
                </div>
            </div>
}

export default Folders