function EmptyCard({ message }) {
  return (
    <div className="card border-0 shadow-sm rounded-4 bg-light p-3 h-100 d-flex align-items-center justify-content-center">
      <p className="text-muted fst-italic mb-0 text-center">{message}</p>
    </div>
  );
}

export default EmptyCard;