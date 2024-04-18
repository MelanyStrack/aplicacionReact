import PropTypes from "prop-types"
import BoxGenre from "./BoxGenre"

function GenresInDb() {
const genres = ["Acción", "Animación", "Aventura", "Ciencia Ficción", "Comedia", "Documental", "Drama", "Fantasía", "Infantiles", "Musical"]
    return (
      
        <div className="col-lg-6 mb-4">						
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
            </div>
            <div className="card-body">
                <div className="row">
                    
                                {genres.map((item,i)=><BoxGenre key={i+item} name={item}/>)}
                           
                    

                </div>
            </div>
        </div>
    </div>
          
    )
  }

  BoxGenre.propTypes = {
    name:PropTypes.string
  }

  BoxGenre.defaultProps = {
    name: "Generico"
  }

  export default GenresInDb