export default function AIAmbassadorLogo({ size = "text-2xl", className = "" }) {
  return (
    <div className={`flex items-center ${className}`}>
      <span className={`font-bold ${size}`}>
        <span className="text-teal-400">AI</span>
        <span className="text-slate-800 dark:text-slate-100"> Ambassador</span>
      </span>
    </div>
  )
}