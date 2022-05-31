<div class="nav__barUserAuth">
	 <?if (!$USER->IsAuthorized()):?>
<button class="nav__barLink nav__barUserAuthItem nav__barUserAuthItem-signUp">Регистрация</button>
 <button class="nav__barLink nav__barUserAuthItem nav__barUserAuthItem-login">Вход</button>
	<div class="ajax">
	</div>
	 <?else:?> <a href="/personal/" class="nav__barLink nav__barUserAuthItem"><?=$USER->GetFullName()?></a> 
<a href="/?logout=yes" class="nav__barLink nav__barUserAuthItem">Выйти</a>
	<?endif?>
</div>
 <br>