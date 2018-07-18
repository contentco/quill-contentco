let Block = Quill.import('blots/block');
let Icon = Quill.import('ui/icons');

class Caption extends Block {

  static icon() {
    return '<svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="nonzero"><rect fill="#D0D0D0" x="2" y="3" width="14" height="8" rx="1"/><rect class="main" fill="#444" x="2" y="13" width="14" height="2" rx="1"/></g></svg>'
  }

}

Caption.blotName = 'caption';
Caption.tagName = 'DIV';
Caption.className = 'blog__caption';

Icon['caption'] = Caption.icon();

Quill.register('formats/caption', Caption);

