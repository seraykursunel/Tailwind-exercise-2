
function FormInput(props) {
  return (
    <div className='max-w-sm p-8'>
      <label
        htmlFor={props.id}
        className='block text-sm font-medium leading-6 text-gray-900'
      >
        {props.labelText}
      </label>
      <div className='mt-2'>
        <input
          id={props.id}
          name={props.type}
          type={props.type}
          placeholder={props.placeholder}
          className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2'
        />
      </div>
      <p className='mt-2 text-sm text-gray-500'>
        {props.description}
      </p>
    </div>
  )
}

export default function App() {
  return (
    <form>
      <FormInput id="e-mail" labelText="Email" type="e-mail" placeholder="you@example.com" description="Bunu sadece spam için kullanacağız."/>
      <FormInput id="password" labelText="Password" type="password" placeholder="Şifreniz" description="Mesaj yok"/>
    </form>
  )
}
