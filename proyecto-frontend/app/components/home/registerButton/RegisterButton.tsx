import { getTest } from '../../../services/Test'

export const RegisterButton = () => {
    const getTestBtn = () => {
        getTest();
    }

    return (
        <>
            <button type="button" className="btn btn-danger" onClick={getTestBtn}>Register</button>
        </>
        
    );
}