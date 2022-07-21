const Button = ({ message }) => {
  return (
    <button className="hover:bg-gray-300 ml-2 px-4 py-1 text-sm font-semibold rounded border text-gray-900">
      { message }
    </button>
  )
}

export default Button;
