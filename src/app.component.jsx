import { useState } from 'react'
import image from 'Images/903.jpg'
import { useForm } from 'react-hook-form'

const App = () => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')

    const {
        handleSubmit,
        register,
        formState: { isValid, isSubmitted },
    } = useForm({
        mode: 'onChange',
    })

    const onSubmit = values => {
        setName(values.name)
        setLastName(values.lastName)
    }

    return (
        <>
            <div>{process.env.QQ}</div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 30,
                    width: 200,
                }}
            >
                <input
                    type="text"
                    {...register('name', {
                        required: true,
                    })}
                />
                <input
                    type="text"
                    {...register('lastName', {
                        required: true,
                    })}
                />
                <input type="submit" value="Submit" />
                {isSubmitted && !isValid && (
                    <h6 aria-label="errorOutput">Vields are required</h6>
                )}
            </form>
            {name && <p aria-label="nameOutput">{name}</p>}
            {lastName && <p aria-label="lastNameOutput">{lastName}</p>}
            <img style={{ width: 200 }} src={image}></img>
        </>
    )
}

export default App
