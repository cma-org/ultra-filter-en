interface DepartmentCardProps {
  name: string;
  description: string;
}

export default function DepartmentCard({ name, description }: DepartmentCardProps) {
  return (
    <div className="bg-[#f5f5f5] border border-gray-200 rounded p-5">
      <div className="w-8 h-1 bg-[#0066a4] rounded mb-3" />
      <h3 className="font-bold text-[#003366] text-base mb-2">{name}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

