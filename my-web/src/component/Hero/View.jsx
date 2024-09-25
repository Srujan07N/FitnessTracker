// import React from 'react'
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';



// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
//   ...theme.applyStyles('dark', {
//     backgroundColor: '#1A2027',
//   }),
// }));

// export default function View() {

//   const object = [{
//     img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQKBL4GgJug3IGzjQb0biZk3cD7LXDRn6jN5qzD_Q7GqvesCj3svzLpFyr4uch3eXODD52kbX2rbLPe3INeLbDyHK4GMFAAP78u13Mx5bRfo_zzUpSc3Ct20gLrs7jAsR8QnD70meI&usqp=CAc',
//     Brand:'HP',
//     Price:'98766'
//   },
//   {
//     img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQuPfRCJsnLVk1Ltwy5tLvo0M16Ys2w_cgOXVaeeBDhjbi6im80tnQxk3yeU8sfb4UwD_6Gp-5CJSX34aVCfG7wcwlZOBDSzv6cIe4Vg_Wu&usqp=CAc',
//     Brand:'LENOVO',
//     Price:'76555'
//   },
//   {
//     img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSiVmFU7S9GlSDdu1hV_YXkvPHbxpCwVGJUY_s-vM1lcTYFpcll3kYQo5TGxU3C8pl-I3NT5JNGPt3pknjq7ezJFbNB74Bod6CkMaQsiQjUBFJrFzZmiGAIil0pt8RCckEQAktEzJ_Anw&usqp=CAc',
//     Brand:'ASUS',
//     Price:'67000'
//   },
//   {
//     img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQuPfRCJsnLVk1Ltwy5tLvo0M16Ys2w_cgOXVaeeBDhjbi6im80tnQxk3yeU8sfb4UwD_6Gp-5CJSX34aVCfG7wcwlZOBDSzv6cIe4Vg_Wu&usqp=CAc',
//     Brand:'DELL',
//     Price:'90000'
//   }]
//   return (
//     <div style={{padding:'20px'}}>
//         {object.map((item)=>{
//           <Item>
//           <Card sx={{ maxWidth: 355 }}>
//       <CardMedia
//         sx={{ height: 240 }}
//         image={item.img}
//         title="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//          {item.Brand}
//         </Typography>
//         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Price:{item.Price} </Button>
//       </CardActions>
//     </Card>
//           </Item>
//         })}
//     </div>
//   )
// }

