import styled from 'styled-components';
import { useState } from 'react';
import { fetchPosts } from '../../store/slicers/postsSlice';
import { FormEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

const Form = styled.div`
    
`

interface FormProps {
    className?: string
}

const Index = ({ className }: FormProps) => {

    const dispatch = useDispatch<any>()
    
    const [formData, setFormData] = useState(
        {
            searchString: '',
            postType: ''
        }
    );

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            searchString: e.target.value,
            postType: formData.postType
        })
    }

    const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setFormData({
            searchString: formData.searchString,
            postType: e.target.value
        })
    }

    const handleForm = (e: FormEvent<HTMLFormElement>) => {
        dispatch(fetchPosts(formData));
        e.preventDefault();
    }

    return(
        <Form className={className}>

            <form onSubmit={handleForm}>
                <label>
                    <select onChange={handleSelect}>
                        <option value={formData.postType}></option>
                        <option value={'new'}>new</option>
                        <option value={'event'}>event</option>
                    </select>
                    <input type="text" placeholder='Поиск' onChange={handleInputChange}/>
                </label>
                <input type="submit" value={'Найти'}/>
            </form>

        </Form>
    )
}

export default Index