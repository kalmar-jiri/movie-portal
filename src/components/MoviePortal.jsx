import { useState } from 'react';

export default function MoviePortal() {
  const [search, setSearch] = useState('');
  const [enteredSearch, setEnteredSearch] = useState('');

  const handleSearchChange = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setEnteredSearch(search);
    console.log(e);
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search movie..." className="form-control" value={search} onChange={handleSearchChange} />
          {search}
        </form>
      </div>
    </div>
  );
}
