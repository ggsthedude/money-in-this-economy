import type React from "react"
import { User, Mail, Phone, MapPin } from "lucide-react"

const ProfilePage: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-[#0A2342]">Profile</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-6">
          <div className="w-24 h-24 bg-[#0A2342] rounded-full flex items-center justify-center text-white text-3xl font-bold mr-6">
            JD
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[#0A2342]">John Doe</h2>
            <p className="text-gray-600">Premium Member</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center">
            <User className="w-5 h-5 text-[#0A2342] mr-3" />
            <span>John Doe</span>
          </div>
          <div className="flex items-center">
            <Mail className="w-5 h-5 text-[#0A2342] mr-3" />
            <span>johndoe@example.com</span>
          </div>
          <div className="flex items-center">
            <Phone className="w-5 h-5 text-[#0A2342] mr-3" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 text-[#0A2342] mr-3" />
            <span>New York, NY</span>
          </div>
        </div>
        <button className="mt-6 bg-[#FFD700] text-[#0A2342] font-semibold py-2 px-4 rounded-lg hover:bg-[#E6C200] transition-colors">
          Edit Profile
        </button>
      </div>
    </div>
  )
}

export default ProfilePage

