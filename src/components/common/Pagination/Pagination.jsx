import styles from "./Pagination.module.css"
import React from "react";

const Pagination = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize)
    let pages = []
    for(let i=0; i<pagesCount; i++) {
        pages.push(i + 1)
    }
    let pagination = []
    for(let i = props.currentPage-1;(i<props.currentPage+4)&&(i<pagesCount);i++){
        if(i===0){
            continue
        }
        pagination.push(<span key={i} onClick={(e) => {
            props.onPageChanged(i)
        }} className={`${styles.pageNumber}  ${props.currentPage === i ? styles.selectedPage : ''}`}>{i}</span>)
    }
    pagination.push(<span key={0}>...</span>)
    return pagination
}

export default Pagination