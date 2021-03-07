import React from 'react'
import styles from './FormsControls.module.css'
const FormControl = ({input,meta,...props}) => {
    let hasError = meta.error  && meta.touched
    return (<div className={styles.formControl + ' ' + (hasError? styles.error:"")}>
        <div>
            {props.children}
            {hasError && <span className={styles.errorText}>{meta.error}</span>}
        </div>

    </div>)
}

export const Textarea = (props) => {
    return <FormControl {...props}><textarea {...props.input} {...props}/></FormControl>

}

export const Input = (props) => {
    return <FormControl {...props}><input {...props.input} {...props}/></FormControl>
}