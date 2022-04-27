import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, setAmount, incrementByAmount, decrimentByAmount } from '../../store/slicers/counterSlice';

const Counter = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .container {
        display: flex;
        flex-direction: row;
        
        .value {
            margin: 0 20px;
        }

        button {
            margin: 0 20px;
        }

        &:first-child {
            margin-bottom: 20px;
        }

        &:last-child {
            input {
                margin: 0 20px;
            }
        }
    }
` 

const Index = ({className}: any) => {

    const value = useSelector((state: any) => state.counter.value);
    const amount = useSelector((state: any) => state.counter.amount);

    const dispatch = useDispatch()

    const onChangeInputValue = (e: any) => {
        dispatch(setAmount(Number(e.target.value)));        
    }

    return(
        <Counter className={className}>
            <div className='container'>
                <button onClick={() => dispatch(decrement())}>-</button>
                <div className='value'>{value}</div>
                <button onClick={() => dispatch(increment())}>+</button>
            </div>
            <div className='container'>
                <button onClick={() => dispatch(decrimentByAmount(amount))}>Вычесть число</button>
                <input type='text' placeholder='Введите число'onChange={onChangeInputValue}/>
                <button onClick={() => dispatch(incrementByAmount(amount))}>Прибавить число</button>
            </div>
        </Counter>
    )
}

export default Index