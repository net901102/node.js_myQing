function addEvent(node,type,listener){
	if (!isCompatible())
	{
		return false;
	}
	if (!(node = $(node)))
	{
		return false;
	}
	if (node.addEventListener)
	{
		//W3C的方法
		node.addEventListener(type,listener,false);
		return true;
	}else if (node.attachEvent)
	{
		//MSIE的方法
		node['e'+type+listener] = listener;
		node[type+listener] = function(){
			node['e'+type+listener](window.event);
		}
		node.attachEvent('on'+type,node[type+listener]);
		return true;
	}

	//若两种方法都不具备则返回false
	return false;
};