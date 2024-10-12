
function Toolbar() {

    // const files = useContext(FileContext);

    return (
        <div className='Viewer-toolbar-container'>
            <div className='Viewer-toolbar'>
                <div className='Viewer-button-group'>
                    <button>+</button>
                    <button>-</button>
                    <button>fit</button>
                    <button>1:1</button>
                    <hr />
                </div>
                <div className='Viewer-ImageControlGroup'>
                    <button> &lt; </button>
                    <h3></h3>
                    <button> &gt; </button>
                    <button>Download</button>
                </div>
            </div>
            <div className='viewer-cancel'>
                <button>
                    x
                </button>
            </div>
        </div>
    )
}

export default Toolbar