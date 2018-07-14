import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.

     <table>
       <thead>
       <tr>
         <th>Id</th>
         <th>Name</th>
         <th>Link</th>
         <th>Description</th>
         <th>Forks</th>
       </tr>
       </thead>
       <tbody>
       {props.repos.map((repo) => { 
         return (
           <tr key={repo._id}>
             <td>{repo.id}</td>
             <td><a href={repo.html_url}>{repo.name}</a></td>
             <td>{repo.html_url}</td>
             <td>{repo.description}</td>
             <td>{repo.forks}</td>
            
           </tr>      
         )
       })}
       </tbody>
    </table>
  </div>
)

export default RepoList;