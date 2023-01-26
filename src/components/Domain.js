import { useEffect, useState } from 'react'
import { ethers } from 'ethers'

const Domain = ({ domain, ethDaddy, provider, id }) => {

  return (
    <div className='card'>
      <div className='card__info'>
        <h3>{domain.name}</h3>
        
        <p>
          <>
            <strong>
              {ethers.utils.formatUnits(domain.cost.toString(), 'ether')}
            </strong>
            ETH
          </>
        </p>
      </div>
    </div>
  );
}

export default Domain;