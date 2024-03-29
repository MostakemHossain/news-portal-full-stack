
import { Link } from "react-router-dom"
const AddWritter = () => {
  return (
    <div className="bg-white rounded-b-md"> <div className="flex justify-between p-4">
    <h2 className="text-xl font-medium">Add Writters</h2>
    <Link className="px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-600" to="/dashboard/writers">Writers</Link>

  </div>
  <div className="p-4">
    <form>
      <div className="grid grid-cols-2 gap-x-8 mb-3">
        <div className="flex flex-col gap-y-2">
          <label className="text-md font-medium text-gray-600" htmlFor="name">Name</label>
          <input type="text" placeholder="name" name="name" className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10" id="name" />
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="text-md font-medium text-gray-600" htmlFor="category">Category</label>
          <select className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10" name="" id="">
                <option value="">--select category--</option>
                <option value="Education">Education</option>
                <option value="Travel">Travel</option>
                <option value="Health">Health</option>
                <option value="International">International</option>
                <option value="Sports">Sports</option>
                <option value="Technology">Technology</option>
                
            </select>
        </div>

       

      </div>
      <div className="grid grid-cols-2 gap-x-8 mb-3">
        <div className="flex flex-col gap-y-2">
          <label className="text-md font-medium text-gray-600" htmlFor="email">Email</label>
          <input type="email" placeholder="email" name="email" className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10" id="email" />
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="text-md font-medium text-gray-600" htmlFor="name">Password</label>
          <input type="password" placeholder="password" name="password" className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10" id="name" />
        </div>

       

      </div>
      <div className="mt-4">
      <button className="px-3 py-[6px] bg-blue-500 rounded-lg text-white hover:bg-blue-600" >Add Writter</button>
      </div>
    </form>
  </div>
  </div>
  )
}

export default AddWritter