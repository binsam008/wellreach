import { useParams } from "react-router-dom";
import { Phone, UserPlus, Zap, ShieldCheck, ArrowUpRight, MessageCircle, Facebook, Instagram, Linkedin } from "lucide-react";
import users from "./data";

export default function Portfolio() {
  const { slug } = useParams();
  const user = users.find((u) => u.slug === slug);

  if (!user) return <div className="p-20 text-center font-medium">User not found</div>;

  // --- NEW: Function to generate and download the vCard ---
  const handleSaveContact = () => {
    // Constructing the vCard format
    const vCardData = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `FN:${user.name}`,
      `TITLE:${user.role}`,
      `TEL;TYPE=CELL:${user.phone}`,
      user.social?.whatsapp ? `X-SOCIALPROFILE;TYPE=whatsapp:${user.social.whatsapp}` : "",
      "END:VCARD"
    ].filter(line => line !== "").join("\n");

    // Create a blob and trigger download
    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${user.slug}.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const initials = user.name
    .split(" ")
    .filter(Boolean)
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="min-h-screen bg-[#F1F5F9] flex items-center justify-center p-4 md:p-8 font-sans">
      <div className="bg-white w-full max-w-6xl rounded-[2rem] shadow-xl shadow-slate-200/60 overflow-hidden flex flex-col md:flex-row border border-white">
        
        {/* Sidebar: Profile & Socials */}
        <div className="md:w-80 bg-slate-50/80 border-r border-slate-100 p-8 pt-12 md:pt-8 flex flex-col">
          <div className="flex-1">
            
            {/* Avatar Section */}
            <div className="relative w-28 h-28 mb-6 mx-0">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#5154B6] to-[#3b3d8a] shadow-lg border-4 border-white overflow-hidden">
                {user.profileImage ? (
                  <img 
                    src={user.profileImage} 
                    alt={user.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-3xl font-black text-white tracking-tighter">
                      {initials}
                    </span>
                  </div>
                )}
              </div>
              <div className="absolute -bottom-1 -right-1 z-10 bg-emerald-500 w-6 h-6 rounded-full border-4 border-white flex items-center justify-center shadow-sm">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              </div>
            </div>

            <h2 className="text-xl font-bold text-slate-900 leading-tight">{user.name}</h2>
            <p className="text-indigo-600 font-semibold text-xs uppercase tracking-wider mt-1 mb-6">
              {user.role}
            </p>

            {/* Main Action Buttons */}
            <nav className="space-y-2 mb-8">
              {/* UPDATED BUTTON: Added onClick handler and active state styling */}
              <button 
                onClick={handleSaveContact}
                className="w-full flex items-center gap-3 px-3 py-2.5 bg-white shadow-sm border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:border-indigo-500 active:bg-slate-50 active:scale-95 transition-all"
              >
                <UserPlus size={16} className="text-indigo-500" />
                Save Contact
              </button>
              
              <a href={`tel:${user.phone}`} className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-slate-100 rounded-xl text-sm font-medium text-slate-600 transition-all">
                <Phone size={16} />
                {user.phone}
              </a>

              {user.social?.whatsapp && user.social.whatsapp !== "#" && (
                <a href={user.social.whatsapp} target="_blank" rel="noreferrer" className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-green-50 rounded-xl text-sm font-medium text-green-600 transition-all">
                  <MessageCircle size={16} />
                  WhatsApp Me
                </a>
              )}
            </nav>

            {/* Social Icons Row */}
            <div className="flex gap-3 px-1">
              {user.social?.facebook && user.social.facebook !== "#" && <a href={user.social.facebook} className="p-2 bg-white rounded-lg border border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all"><Facebook size={18} /></a>}
              {user.social?.instagram && user.social.instagram !== "#" && <a href={user.social.instagram} className="p-2 bg-white rounded-lg border border-slate-200 text-slate-400 hover:text-pink-600 hover:border-pink-200 transition-all"><Instagram size={18} /></a>}
              {user.social?.linkedin && user.social.linkedin !== "#" && <a href={user.social.linkedin} className="p-2 bg-white rounded-lg border border-slate-200 text-slate-400 hover:text-blue-700 hover:border-blue-300 transition-all"><Linkedin size={18} /></a>}
            </div>
          </div>

          <div className="mt-8 p-4 bg-indigo-50 rounded-2xl flex items-start gap-3">
            <ShieldCheck size={20} className="text-indigo-600 shrink-0" />
            <div>
              <p className="text-[10px] font-bold text-indigo-900 uppercase tracking-tighter">Verified Expert</p>
              <p className="text-[10px] text-indigo-700 leading-tight mt-0.5 tracking-tight">Credentials & identity verified.</p>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-8 md:p-12">
          <div className="flex flex-col h-full">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-[2px] w-8 bg-indigo-500"></div>
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Profile Overview</h3>
              </div>
              
              <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed mb-12">
                {user.description}
              </p>

              <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Expertise & Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {user.services.map((service, i) => (
                  <div key={i} className="flex items-center gap-3 p-5 rounded-2xl bg-slate-50/50 border border-slate-100 hover:border-indigo-100 hover:bg-white hover:shadow-md transition-all group">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center group-hover:bg-indigo-600 transition-colors shadow-sm">
                      <Zap size={16} className="text-indigo-600 group-hover:text-white" />
                    </div>
                    <span className="text-sm font-bold text-slate-700">{service}</span>
                    <ArrowUpRight size={14} className="ml-auto text-slate-300 opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-end">
                <img src="/nav1.png" alt="Company Logo" className="h-8 opacity-40 grayscale" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}