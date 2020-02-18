function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the
    // search query
    for (i = 0; i < li.length; i++) {
	a = li[i].getElementsByTagName("a")[0];
	txtValue = a.textContent || a.innerText;
	if (txtValue.toUpperCase().indexOf(filter) > -1) {
	    li[i].style.display = "";
	} else {
	    li[i].style.display = "none";
	}
    }
    // $("#myUL").quickPagination();
}

function setLowMediumHigh(l, m, h){
    $("#low").attr("src", l);
    $("#medium").attr("src", m);
    $("#high").attr("src", h);

    $("#lowa").attr("href", l);
    $("#mediuma").attr("href", m);
    $("#higha").attr("href", h);
}


$(document).ready(function(){
    var LIB = {
	"Super Mario": ["https://static.planetminecraft.com/files/resource_media/screenshot/1236/mario_3501733.jpg", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ed991cf4-7c8c-4530-b6ba-a3abf3ab2eae/dc6iasu-28eb3a37-3ff0-4623-8611-0112c61af2b3.png/v1/fill/w_600,h_680,strp/super_mario__classic_mario_2d_by_joshuat1306_dc6iasu-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjgwIiwicGF0aCI6IlwvZlwvZWQ5OTFjZjQtN2M4Yy00NTMwLWI2YmEtYTNhYmYzYWIyZWFlXC9kYzZpYXN1LTI4ZWIzYTM3LTNmZjAtNDYyMy04NjExLTAxMTJjNjFhZjJiMy5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.gFzmGR_ZuiHRU8rRIUqxiRTXVMAFLNOerxT252joBis", "http://images.nintendolife.com/news/2011/11/out_today_super_mario_3d_land_and_wallpapers/attachment/0/large.jpg"],
	"Dragons": ["https://static.planetminecraft.com/files/resource_media/screenshot/1322/DragonPixelArt_5608866.jpg", "https://cdn3.f-cdn.com/contestentries/324983/18035258/568e88727a5b9_thumb900.jpg", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/31a92255-861d-40f4-ad78-a2efd309b0d2/d7bjait-ae11581d-83da-4b2c-bedd-7331cde22b9e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMxYTkyMjU1LTg2MWQtNDBmNC1hZDc4LWEyZWZkMzA5YjBkMlwvZDdiamFpdC1hZTExNTgxZC04M2RhLTRiMmMtYmVkZC03MzMxY2RlMjJiOWUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.oqUL7zW1rYIMn_K7j3JoXREkx1urtAhw0t98p-lAYE4"],
	"Rabbits": ["http://pixelartmaker.com/art/710cd73e1b16ad1.png", "https://www.netclipart.com/pp/m/112-1125005_how-to-draw-bunny-rabbit-2d-drawing.png", "http://webneel.com/daily/sites/default/files/images/daily/07-2013/22-3d-rabbit-garden-background-flowers-by-sze-jones%204.jpg"],
	"Lions": ["http://pixelartmaker.com/art/a063afd0f2181a8.png", "https://cdn.dribbble.com/users/1949397/screenshots/6227895/1.png", "http://www.artofjose.com/site/wp-content/uploads/2012/08/Lion01_beauty.jpg"],
	"Cats": ["http://pixelartmaker.com/art/8299b581740961c.png", "https://www.vpaint.org/cat_small.png", "https://open3dmodel.com/wp-content/uploads/2019/04/20190419_5cb9a07dc34aa.jpg"],
	"Fishes": ["http://pixelartmaker.com/art/5f6538d96465390.png", "https://opengameart.org/sites/default/files/forum-attachments/Fish-Move-Swim-1.png", "http://img.cadnav.com/allimg/170622/cadnav-1F622104131.jpg"],
	"Sonic": ["http://pixelartmaker.com/art/9f338c6afd047af.png", "https://giantbomb1.cbsistatic.com/uploads/original/3/32127/2188728-45393961.jpg", "https://f0.pngfuel.com/png/127/644/sonic-3d-sonic-the-hedgehog-2-sonic-generations-sonic-cd-sonic-the-hedgehog-png-clip-art-thumbnail.png"],
	"Castles": ["http://pixelartmaker.com/art/d90ee588168877c.png", "https://thumbs.dreamstime.com/x/cartoon-castle-22922703.jpg", "https://image.freepik.com/free-vector/3d-castle-design_1115-9.jpg"],
	"Trees": ["https://www.selfteachingkings.com/wp-content/uploads/2017/05/PineTreeColor0-300x300.png", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ef53da20-edbb-4a42-80fc-ef416f5d5394/da26alx-10988c60-cc42-44f7-b289-190952e2d2ed.png/v1/fill/w_894,h_894,q_75,strp/tree_one_by_aunavenatus-da26alx.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwib2JqIjpbW3sicGF0aCI6Ii9mL2VmNTNkYTIwLWVkYmItNGE0Mi04MGZjLWVmNDE2ZjVkNTM5NC9kYTI2YWx4LTEwOTg4YzYwLWNjNDItNDRmNy1iMjg5LTE5MDk1MmUyZDJlZC5wbmciLCJ3aWR0aCI6Ijw9ODk0IiwiaGVpZ2h0IjoiPD04OTQifV1dLCJ3bWsiOnsicGF0aCI6Ii93bS9lZjUzZGEyMC1lZGJiLTRhNDItODBmYy1lZjQxNmY1ZDUzOTQvYXVuYXZlbmF0dXMtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.nVRcBG-e2n5OpP0Fazdxq2TCDQ1QleDnxMfTplpynOo", "https://f0.pngfuel.com/png/460/956/tree-3d-computer-graphics-animation-tree-png-clip-art.png"],
	"Birds": ["http://pixelartmaker.com/art/9d0625da55061c5.png", "https://mir-s3-cdn-cf.behance.net/projects/404/17076483.548bec2bdadb4.png", "http://img.cadnav.com/allimg/170718/cadnav-1FGQQ105.jpg"],
	"Eyes": ["http://pixelartmaker.com/art/b192aaa7a50dcd7.png", "https://i.pinimg.com/originals/4a/df/66/4adf666f8d93e7e995c6b050a3fb25ea.png", "http://pngimg.com/uploads/eye/eye_PNG35626.png"],
	"Magic": ["http://pixelartmaker.com/art/5bd267d149d0432.png", "https://svgsilh.com/png/309525.png", "https://images.freecreatives.com/wp-content/uploads/2016/04/Magical-Background-For-you.jpg"],
	"Explosions": ["http://pixelartmaker.com/art/cc72ad76e63a7d5.png", "https://svgsilh.com/png/153710-f44336.png", "https://static.turbosquid.com/Preview/2014/07/08__05_25_15/explo04_03_original_post4_f055_darkMB.jpg617fa136-41dc-4c2e-849b-d66d9da60446Original.jpg"],
	"Smoke": ["https://s3.amazonaws.com/gameartpartnersimagehost/wp-content/uploads/edd/2015/08/Featured-Image12.png", "https://svgsilh.com/png/1601022-3f51b5.png", "https://img1.cgtrader.com/items/61652/9009c93008/large/campfire-smoke-3d-model-animated-max-obj-blend-mtl.png"],
	"Human Faces": ["http://cliparts.co/cliparts/8TA/Er5/8TAEr5LAc.png", "https://cdn.dribbble.com/users/2608683/screenshots/5717554/nitish_copy_2_4x-100_2x.jpg", "https://img-new.cgtrader.com/items/49245/e50d24ca20/very-realistic-human-face-3d-model-obj.jpg"],
	"Pistols": ["http://pixelartmaker.com/art/00d6a5f51b79f7d.png", "https://www.jing.fm/clipimg/detail/89-892614_black-and-white-handgun-png-gun-clipart.png", "http://img.cadnav.com/allimg/131222/1-131222224151104.jpg"],
	"Rifles": ["http://pixelartmaker.com/art/c70f06b6c34dc5a", "https://www.nicepng.com/png/full/959-9597024_gun-clipart-musket-m14-rifle-2d.png", "https://static.turbosquid.com/Preview/001164/879/YZ/submachine-gun-3D-model_0.jpg"],
	"Dogs": ["http://pixelartmaker.com/art/26edf66e5b847cc.png", "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/6007/dog-clipart-medium.png", "http://www.3dmodelfree.com/imguploads/Image/0905/models_z/1020/7.jpg"],
	"Zombies": ["http://pixelartmaker.com/art/094e057d168ddea.png", "http://images.clipartpanda.com/zombie-clipart-zombie3.png", "https://www.cgstudio.com/imgd/l/81/5801fb32a70248f6608b4567/5901.jpg"],
	"Clovers": ["http://pixelartmaker.com/art/47b358ea6259a5e.png", "http://www.clker.com/cliparts/2/S/7/y/b/d/clover-hi.png", "https://img2.cgtrader.com/items/9893/ada6cb442c/large/shamrock-clover-3d-model-obj-3ds-fbx-c4d-dxf-X.jpg"],
	"Dwarfs": ["http://pixelartmaker.com/art/f53ca096dd90dc9.png", "http://images.clipartpanda.com/dwarf-clipart-Doc1.jpg", "http://img.cadnav.com/allimg/140722/1-140H2220119.jpg"],
	"Teapots": ["http://pixelartmaker.com/art/b9006a092f0bde8.png", "http://images.clipartpanda.com/teapot-clipart-cc-kitchen-utensils-clip-art-teapot.png", "https://img-new.cgtrader.com/items/56921/04705862f7/large/white-teapot-3d-model-obj-blend-mtl.png"],
	"Buckets": ["http://pixelartmaker.com/art/85d442b87c0677c.png", "http://www.clipartbest.com/cliparts/Rcd/brp/Rcdbrp7c9.png", "https://static.turbosquid.com/Preview/2014/07/07__10_19_41/1.jpg7e7ea112-4859-43b6-9cc5-402fe8a3e4a8Large.jpg"],
	"Forks": ["http://pixelartmaker.com/art/05ef6f17d9d20b0.png", "https://pixabay.com/static/uploads/photo/2012/04/24/23/19/fork-41080_640.png", "https://static.turbosquid.com/Preview/2015/10/08__18_59_11/forkkeyshot.68_1.jpg8e426f7f-4fef-4ea7-8b4d-1fe9cb0f0ca3Original.jpg"],
	"Knives": ["http://pixelartmaker.com/art/c99de6d481c6ab4.png", "http://images.clipartpanda.com/knife-clip-art-knife.gif", "https://free3d.com/imgd/l20901-knife-64986.jpg"],
	"Houses": ["http://pixelartmaker.com/art/e1ce7edde5296d8.png", "https://www.publicdomainpictures.net/pictures/90000/nahled/house-illustration-clipart.jpg", "http://www.cookcountylandbank.org/wp-content/uploads/2015/03/cute-house-illustration-113327418.png"],
	"Food": ["http://pixelartmaker.com/art/fc5c4f8f6bed024.png", "http://blogs.nottingham.ac.uk/studentlife/files/2017/05/food-clipart-free-download-0nYSD0-clipart-e1494228496123.jpg", "https://i.pinimg.com/736x/29/e6/5b/29e65bb94816955809668c54fed98571.jpg"],
	"Sausages": ["http://pixelartmaker.com/art/753ce060eea2ca1.png", "http://www.clker.com/cliparts/0/9/8/4/12512884871063283777food-saussage.svg.hi.png", "https://thumbs.dreamstime.com/t/sausages-two-kind-delicious-55800057.jpg"],
	"Bread": ["http://pixelartmaker.com/art/0663cdf892e02be.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Jean_victor_balin_bread.svg/640px-Jean_victor_balin_bread.svg.png", "https://images.all-free-download.com/images/graphicthumb/three_bread_312970.jpg"],
	"Clouds": ["http://pixelartmaker.com/art/115fc6aea4a398c.png", "http://www.clker.com/cliparts/k/i/g/N/T/j/cloud-hi.png", "https://i.pinimg.com/originals/cf/7b/00/cf7b00b9a8bd69f2963ca600b0444b80.jpg"],
	"Sun": ["http://pixelartmaker.com/art/67c5bb4f1a79b43.png", "https://upload.wikimedia.org/wikipedia/commons/d/df/RP_logo_variation.png", "https://clipartix.com/wp-content/uploads/2017/06/Sunshine-sun-clip-art-free-clipart-images-4.png"],
	"Moon": ["http://pixelartmaker.com/art/ac0fa22c3bec1cc.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Moon_Sketch_vector.svg/1024px-Moon_Sketch_vector.svg.png", "https://rlv.zcache.com/the_moon_3d_effect_statuette-r483be9420ecf4e32ae18378b4864cb6f_x7saw_8byvr_540.jpg"],
	"Fire": ["http://pixelartmaker.com/art/da234f98a2c9c22.png", "https://cdn.pixabay.com/photo/2014/04/03/00/35/fire-308788_960_720.png", "https://freedesignfile.com/upload/2013/06/Fire-21.jpg"],
	"Horses": ["http://pixelartmaker.com/art/271cf234747654b.png", "https://clipartix.com/wp-content/uploads/2016/04/Horse-free-to-use-cliparts.png", "https://static.turbosquid.com/Preview/001206/082/GH/horse-work-ztl-3D-model_D.jpg"],
	"Bikes": ["http://pixelartmaker.com/art/f75048c524518d6.png", "https://classroomclipart.com/images/gallery/Clipart/Transportation/Bicycle/touring-bike-clipart-5130.jpg", "https://image.freepik.com/free-vector/red-bike-3d_1021-19.jpg"],
	"Letters": ["http://pixelartmaker.com/art/9db4578c90b51de.png", "http://www.clker.com/cliparts/R/R/m/f/Z/l/letter-hi.png", "http://cdn.idesignow.com/public_html/img/2011/10/envelope-icon-web-design-email-template-icons-contact-82.jpg"],
	"Hearts": ["http://pixelartmaker.com/art/d179670e348d1fe.png", "http://www.clker.com/cliparts/g/2/I/c/5/j/three-hearts-hi.png", "https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/22638/580/386/m1/fpnw/wm0/heart-.jpg?1371396968&s=8f30a962119d4e9b21d349f9ce204b17"],
	"Cars": ["http://pixelartmaker.com/art/808c50746866b6b.png", "http://www.clker.com/cliparts/R/7/e/b/5/X/red-car-hi.png", "https://thumbs.dreamstime.com/b/hatchback-car-flat-d-vector-isometric-illustration-high-quality-city-transport-icon-ico-68586354.jpg"],
	"Ships": ["http://pixelartmaker.com/art/3eb2efa6323e035.png", "https://thumbs.dreamstime.com/x/old-ship-13570948.jpg", "https://i.pinimg.com/originals/d1/bd/61/d1bd612f7961d52260a5982891b94090.png"],
	"Knights": ["http://pixelartmaker.com/art/e67839ecc7ea933.png", "http://gameartpartners.com/wp-content/uploads/edd/2015/03/Darkness_Knight_Featured.png", "https://static.turbosquid.com/Preview/2018/02/12__07_40_28/FaraamKnight.1221.jpg1EACEDF3-C093-40D8-A4ED-C94AF2AF5358Default.jpg"],
	"Computers": ["http://pixelartmaker.com/art/e798b281a54f461.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Gnome-computer.svg/1024px-Gnome-computer.svg.png", "https://img.freepik.com/free-vector/modern-realistic-detailed-laptop-isolated-white-vector-illustration_1624-285.jpg?size=626&ext=jpg"],
	"Guitars": ["http://pixelartmaker.com/art/1cf0ce0a67d53b7.png", "http://www.clker.com/cliparts/X/H/I/0/t/5/guitar-hi.png", "http://www.sketchup4architect.com/sketchup-3d-components/guitar/guitar9.jpg"],
    }
    let u = $("#myUL");
    for (var key in LIB) {
	if (!LIB.hasOwnProperty(key)) continue;
	u.append('<li><a href="#">' + key + '</a></li>')
    }

    setLowMediumHigh(LIB["Super Mario"][0],
		     LIB["Super Mario"][1],
		     LIB["Super Mario"][2]);

    $("#myUL").quickPagination();
    $('.single-item').slick({
	dots: true
    });

    $("#myUL").children("li").click(function (el){
	let s = el.target.text;
	setLowMediumHigh(LIB[el.target.text][0],
			 LIB[el.target.text][1],
			 LIB[el.target.text][2]);
	$('.single-item').slick('refresh');
    })
});
