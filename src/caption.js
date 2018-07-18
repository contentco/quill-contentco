let Block = Quill.import('blots/block');
let Icon = Quill.import('ui/icons');

class Caption extends Block {

  static icon() {
    return '<svg viewBox="0 0 25 18" xmlns="http://www.w3.org/2000/svg"><path d="M5.8 12.6c-2 0-3.6-1.4-3.6-3.6s1.5-3.6 3.6-3.6c1.6 0 2.8.8 3.3 2.1L7.8 8a2 2 0 0 0-2-1.3c-1.2 0-2.1.9-2.1 2.3s.9 2.3 2.1 2.3a2 2 0 0 0 2-1.3l1.3.5c-.5 1.3-1.7 2.1-3.3 2.1zm9.3 0l-.5-1.5h-3l-.5 1.4H9.6l2.6-7H14l2.6 7H15zm-3-2.8h2l-1-3-1 3zm8.5-4.3c1.3 0 2.2 1 2.2 2.3 0 1.2-.9 2.2-2.2 2.2H19v2.5h-1.5v-7h3zm-.3 3.3c.7 0 1-.4 1-1 0-.7-.3-1.1-1-1.1h-1.2v2h1.2z" fill="#444" fill-rule="evenodd"/></svg>'
  }

}

Caption.blotName = 'caption';
Caption.tagName = 'DIV';
Caption.className = 'blog__caption';

Icon['caption'] = Caption.icon();

Quill.register('formats/caption', Caption);

