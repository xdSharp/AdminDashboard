import React, { useState } from 'react';
import { SearchForm } from './SearchForm/SearchForm';
import './PostHeader.css';
import { AddForm } from './AddForm/AddForm';

export const PostsHeader = ({ title, blogPosts, isLikedPosts }) => {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <section className='postsHeader'>
      <h1>Table</h1>
      {!isLikedPosts && (
        <button onClick={() => setShowAddForm(true)} className='showAddFormBtn'>
          Show Table
        </button>
      )}

      <SearchForm />

      {showAddForm && (
        <AddForm
          blogPosts={blogPosts}
          setShowAddForm={setShowAddForm}
        />
      )}
    </section>
  );
};
