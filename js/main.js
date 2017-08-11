window.onload = function()
{

	var sidebar = document.querySelector('[data-role="sidebar"]');

	var slideSidebar = function(block)
	{
		console.log(typeof block.getBoundingClientRect().top, block.parentNode.offsetTop);

		if(block.getBoundingClientRect().top < 0)
		{
			// block.style.transform = 'translateY(' + block.getBoundingClientRect().top + 'px)';
		}
	}

	window.addEventListener('scroll', function()
		{
			slideSidebar(sidebar)
		}, false)
}