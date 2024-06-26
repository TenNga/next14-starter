import style from './pagination.module.css';

const Pagination = () => {
    return(
        <div className={style.container}>
            <button className={style.button} disabled>Previous</button>
            <button className={style.button}>Next</button>
        </div>
    )
};

export default Pagination;