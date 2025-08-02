import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function FooterComponent() {
  return (
    <MDBFooter className='bg-[#b4e7ad] text-start text-muted'>
  <section>
    <MDBContainer fluid className='px-0'>
      <MDBRow className='pt-4'>
        <MDBCol size='12'>
          <p className='mb-1 fw-bold text-uppercase'>
            CÔNG TY TNHH MTV DỊCH VỤ CÔNG ÍCH QUẬN 6
          </p>
          <p className='mb-1'>
            <strong>ĐỊA CHỈ:</strong> 42-44 CHỢ LỚN, PHƯỜNG 11, QUẬN 6, TP. HCM. &nbsp;
            
            
          </p>
          <p className='mb-1'>
            <strong>ĐIỆN THOẠI:</strong> (08) 3876 7594 - 3876 7597 - 3876 7595. &nbsp;
          </p>
          <p className='mb-1'>
            <strong>FAX:</strong> 08. 38767643
          </p>
          <p className='mb-1'>
            <strong>EMAIL:</strong> <a href='mailto:dvcicq6@yahoo.com' className='text-reset'>dvcicq6@yahoo.com</a> &nbsp;
            
          </p>
          <p className='mb-1'>
            <strong>WEBSITE:</strong> <a href='http://www.dvcicq6.com.vn' target='_blank' rel='noopener noreferrer' className='text-reset'>www.dvcicq6.com.vn</a>
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </section>
</MDBFooter>

  );
}