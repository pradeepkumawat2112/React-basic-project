import { useForm } from 'react-hook-form'

const Registeration = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()


    const OnSubmit = (data) => {
        console.log(data)
    }

    return (
        <>
            <div className="mdiv">
                <h1> Register Here...</h1>
                <form onSubmit={handleSubmit(OnSubmit)}>
                    <div className="flex">
                        <label>NAME:</label>
                        <input type="text" className="input" placeholder="enter name" name="name" {...register('name',{required:true})} />
                        {errors.name && <span>name required</span>}
                    </div>

                    <div className="flex">
                        <label>EMAIL:</label>
                        <input type="email" className="input" placeholder="enter email" name="email" {...register('email',{required:true})} />
                        {errors.email && <span>email required</span>}
                    </div>

                    <div className="flex">
                        <label>password:</label>
                        <input type="password" className="input" placeholder="enter password" name="password" {...register('password',{required:true})} />
                        {errors.password && <span>password required</span>}
                    </div>

                    <div className="flex">
                        <label>PHONE:</label>
                        <input type="number" className="input" placeholder="enter phone number" name="phone" {...register('number',{required:true})} />
                        {errors.number && <span>phone number required</span>}
                    </div>

                    <div className="flex">
                        <label>AGE:</label>
                        <input type="number" className="input" placeholder="enter age" name="age" {...register('age',{required:true})} />
                        {errors.age && <span>age required</span>}
                    </div>

                    <button id="btn" >REGISTER</button>
                </form>
            </div>

        </>
    )
}

export default Registeration