import './SocialCard.css';
import { Link } from 'react-router-dom';



const SocialCard = ({ users }) => {
    console.log(users)
    return (
    <div className='container'>
        <div className='row'>
            {
               users && users.map((user) => {
                    return (
                        <>
                        <div className='col-lg-3'>
                        <div className="card">
                            <div className="card__title">
                                <p>{user.name}</p>
                            </div>
                            <div className="card__body">
                                <p> {user.gender}</p>
                                <p>{user.birth_year}</p>
                                <p>{user.height}</p>
                                <>
                                    <Link to={'/Persondetails'}>
                                        <p className='btn btn-dark'>personDetails</p>
                                    </Link>
                                </>
                            </div>
                            </div>
                            </div>
                        </>
                    )
                })
            }

            </div>
        </div>
    )
};

export default SocialCard;