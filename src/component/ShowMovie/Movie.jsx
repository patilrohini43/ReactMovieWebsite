import React from 'react';
import Json from '/home/rohini/moviewebsite/src/Json/movieData.json'
import Button from '@material-ui/core/Button';
import styles from '/home/rohini/moviewebsite/src/component/ShowMovie/Movie.module.scss'


class Movie extends React.Component{

    render() {
		return (
            <div className={styles.mainDiv}>
                {
                  Json.map((i) => {
                    return (
                      <div >
                        <div className={styles.imageDiv} >
                        <img className={styles.image} src={require(`/home/rohini/moviewebsite/public/assets/${i.image}`)} alt="item" /> 
                        <span className={styles.name}><b>Movie Name:</b>{i.movieName}</span>
                        <span className={styles.name}><b>Director:</b>{i.Director}</span>
                        <span className={styles.name}><b>Writer:</b>{i.Writers}</span>
                        <Button className={styles.button} variant="contained"  href={i.movieLink}> Play Now </Button>
                        {/* <span className={styles.name}>{i.movieName}</span> */}
                        </div>     
                      </div>
                    );
                  })
                } 
            </div>
        );
    }
}

export default Movie;