import { FaEdit, FaEye, FaTrash } from "react-icons/fa"
import { Link } from "react-router-dom"
const NewsContent = () => {
  return (
    <div>
        <div className="px-4 py-3 flex gap-x-3">
            <select className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10" name="" id="">
                <option value="">--select type--</option>
                <option value="pending">Pending</option>
                <option value="active">Active</option>
                <option value="deactive">Deactive</option>
            </select>
            <input type="text" placeholder="search news" className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10" />
        </div>
        <div className="realtive overflow-x-auto p-4">
          <table className="w-full text-sm text-left text-slate-600">
            <thead className="text-xs uppercase text-gray-700 bg-gray-50">
              <tr>
                <th className="px-7 py-3">No</th>
                <th className="px-7 py-3">Title</th>
                <th className="px-7 py-3">Image</th>
                <th className="px-7 py-3">Category</th>
                <th className="px-7 py-3">Description</th>
                <th className="px-7 py-3">Date</th>
                <th className="px-7 py-3">Status</th>
                <th className="px-7 py-3">Action</th>
              </tr>

            </thead>
            <tbody>
              <tr className="bg-white border-b" >
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">Travel best guide</td>
                <td className="px-6 py-4">
                  <img className="w-[40px] h-[40px]" src="data:image/jpeg;base64,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" alt="" />
                </td>
                <td className="px-6 py-4">Travel</td>
                <td className="px-6 py-4">You All must no....</td>
                <td className="px-6 py-4">10 january,2024</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-[2px] bg-green-100 text-green-800 rounded-lg text-xs cursor-pointer">active</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-start items-center gap-x-4 text-white">
                    <Link className="p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50"><FaEye/></Link>
                    <Link className="p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50"><FaEdit/></Link>
                    <div className="p-[6px] bg-red-500 rounded hover:shadow-lg hover:shadow-red-500/50">
                      <FaTrash />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>

          </table>

        </div>
    </div>
  )
}

export default NewsContent