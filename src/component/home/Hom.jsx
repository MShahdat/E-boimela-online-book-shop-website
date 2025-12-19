import React from 'react';
import Card from './Card';

const categories = ['Trending', 'Islamic', 'Free', 'Career', 'Non-Fiction', 'Thriller', 'Academic']

const show = [
  {
    cat : 'ট্রেন্ডিং',
    catEn: 'Trending',
  },
  {
    cat: 'ইসলামিক',
    catEn: 'Islamic',
  },
  {
    cat: 'ফ্রি',
    catEn: 'Free',
  },
  {
    cat: 'ক্যারিয়ার',
    catEn: 'Career',
  },
  {
    cat: 'নন-ফিকশন',
    catEn: 'Non-Fiction',
  },
  {
    cat: 'থ্রিলার',
    catEn: 'Thriller',
  },
  {
    cat: 'একাডেমিক',
    catEn: 'Academic',
  }
]

const Hom = () => {
  return (
    <div>
      {
        show.map((cat, idx) => (
          <div key={idx}>
            <Card categories = {cat}></Card>
          </div>
        ))
      }
    </div>
  );
};

export default Hom;