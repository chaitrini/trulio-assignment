import { Box, Typography, Link } from '@mui/material';

const RealEstateInfo = () => {
  return (
    <>
    <Box sx={{textAlign: 'left', display:'flex', flexDirection: 'column', gap: '2rem'}}>
      <Typography variant="body1" fontWeight="bold" fontSize={12} color={'text.primary'} >
        Trulia is a registered Trademark of Zillow, Inc. Zillow, Inc. holds real estate brokerage{' '}
        <Link
          href="https://www.zillow.com/info/real-estate-licenses"
          target="_blank"
          fontSize={12}
          rel="noreferrer noopener nofollow noindex"
          underline="always"
        >
          licenses
        </Link>{' '}
        in all 50 states and D.C. and Zillow (Canada) Inc. holds real estate brokerage{' '}
        <Link
          href="https://www.zillow.com/info/real-estate-licenses"
          target="_blank"
          fontSize={12}

          rel="noreferrer noopener nofollow noindex"
          underline="always"
        >
          licenses
        </Link>{' '}
        in multiple provinces.
      </Typography>
      <Box>
        <Link
          href="https://s.zillow.net/pfs/static/SOP_NYS.pdf"
          target="_blank"
          fontSize={12}

          rel="noreferrer noopener nofollow"
          underline="always"
        >
          § 442-H New York Standard Operating Procedures
        </Link>
        <br />
        <Link
          href="https://dos.ny.gov/system/files/documents/2021/08/fairhousingnotice.pdf"
          target="_blank"
          fontSize={12}

          rel="noreferrer noopener nofollow"
          underline="always"
        >
          New York Fair Housing Notice
        </Link>
        <br />
        <Typography variant="body1" component="span" underline="always" fontSize={12} color={'text.primary'}>
          TREC:
        </Typography>{' '}
        <Link
          href="https://s.zillow.net/pfs/static/TREC_ZINC_1-25-21.pdf"
          target="_blank"
          fontSize={12}

          rel="noreferrer noopener nofollow"
          underline="always"
        >
          Information about brokerage services
        </Link>
        ,{' '}
        <Link
          href="https://www.trec.texas.gov/forms/consumer-protection-notice"
          target="_blank"
          fontSize={12}

          rel="noreferrer noopener nofollow"
          underline="always"
        >
          Consumer protection notice
        </Link>
        <br />
        California DRE #1522444
      </Box>
      <Typography variant="body1" fontWeight="bold" fontSize={12} color={'text.primary'}>
        <Link
          href="https://www.trulia.com/info/contact-us/"
          target="_blank"
          fontSize={12}

          rel="noreferrer noopener"
          underline="always"
        >
          Contact Zillow, Inc Brokerage
        </Link>
      </Typography>
    </Box>
    
    <Box sx={{ fontSize: '12px', textAlign: 'left', margin: '16px 0' }}>
    Zillow Group is committed to ensuring digital accessibility for individuals with disabilities.  We are continuously working to improve the accessibility of our web experience for everyone,  and we welcome feedback and accommodation requests. If you wish to report an issue or seek an  accommodation, please let us know.
    </Box>

    <Box sx={{ fontSize: '10px', textAlign: 'left', margin: '16px 0' }}>
    Copyright © 2024 Trulia, LLC. All rights reserved. Equal Housing Opportunity. Have a Question? Visit our Help Center to find the answer.

    </Box>
    </>
  );
};

export default RealEstateInfo;
