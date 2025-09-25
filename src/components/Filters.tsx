interface FiltersProps {
  selectedType: string;
  setSelectedType: (type: string) => void;
  maxPrice: number;
  setMaxPrice: (price: number) => void;
}

const Filters: React.FC<FiltersProps> = ({ selectedType, setSelectedType, maxPrice, setMaxPrice }) => {
  return (
    <div className="flex gap-4 mb-4">
      <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
        <option value="">All Types</option>
        <option value="Plumber">Plumber</option>
        <option value="Electrician">Electrician</option>
        <option value="Cleaner">Cleaner</option>
      </select>

      <select value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))}>
        <option value={Infinity}>All Prices</option>
        <option value={50}>Up to $50</option>
        <option value={100}>Up to $100</option>
      </select>
    </div>
  );
};

export default Filters;
