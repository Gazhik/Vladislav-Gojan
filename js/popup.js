$(document).ready(() =>
{
	$('.portfolio-item').on('click',function(e)
	{
		e.stopPropagation();
		createPopup($(this));
	});
});
 function createPopup(item)
{
	if (!item)
	{
		return;
	}
	const container = $('<div>',{'class':'popup-container'});
	const src = item.data('src');
	const img = $('<img>',{'class':'popup', 'src': src});
	container.append(img);
	$('body').append(container);

setTimeout(()=>
{
	container.addClass('ready');
});

img.on('click',()=>
{
	container.removeClass('ready');
	setTimeout(()=>
	{
		container.remove();
	},250);
});
}
menuList.forEach(function(element)
{
	element.addEventListener('click',function(event)
	{
		const elementLink = element.dataset.link;
		if (elementLink)
		{
			event.preventDefault();
			document.getElementById(elementLink).scrollIntoView({behavior:'smooth'});
		}
	});
});

