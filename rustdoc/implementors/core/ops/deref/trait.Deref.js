(function() {var implementors = {};
implementors["ansi_term"] = [{"text":"impl&lt;'a, S:&nbsp;'a + ToOwned + ?Sized&gt; Deref for ANSIGenericString&lt;'a, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as ToOwned&gt;::Owned: Debug,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["anyhow"] = [{"text":"impl Deref for Error","synthetic":false,"types":[]}];
implementors["ascii"] = [{"text":"impl Deref for AsciiString","synthetic":false,"types":[]}];
implementors["bstr"] = [{"text":"impl Deref for BString","synthetic":false,"types":[]},{"text":"impl Deref for BStr","synthetic":false,"types":[]}];
implementors["cargo"] = [{"text":"impl Deref for Unit","synthetic":false,"types":[]},{"text":"impl Deref for InternedString","synthetic":false,"types":[]}];
implementors["crossbeam_epoch"] = [{"text":"impl&lt;T:&nbsp;?Sized + Pointable&gt; Deref for Owned&lt;T&gt;","synthetic":false,"types":[]}];
implementors["crossbeam_utils"] = [{"text":"impl&lt;T&gt; Deref for CachePadded&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;?Sized&gt; Deref for ShardedLockReadGuard&lt;'a, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;?Sized&gt; Deref for ShardedLockWriteGuard&lt;'a, T&gt;","synthetic":false,"types":[]}];
implementors["either"] = [{"text":"impl&lt;L, R&gt; Deref for Either&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: Deref,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Deref&lt;Target = L::Target&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["git2"] = [{"text":"impl Deref for OidArray","synthetic":false,"types":[]},{"text":"impl Deref for Buf","synthetic":false,"types":[]}];
implementors["guppy"] = [{"text":"impl&lt;T&gt; Deref for DebugIgnore&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; Deref for Obs&lt;'a, T&gt;","synthetic":false,"types":[]}];
implementors["humantime"] = [{"text":"impl Deref for Duration","synthetic":false,"types":[]},{"text":"impl Deref for Timestamp","synthetic":false,"types":[]}];
implementors["libssh2_sys"] = [{"text":"impl Deref for libssh2_struct_stat","synthetic":false,"types":[]}];
implementors["once_cell"] = [{"text":"impl&lt;T, F:&nbsp;FnOnce() -&gt; T&gt; Deref for Lazy&lt;T, F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T, F:&nbsp;FnOnce() -&gt; T&gt; Deref for Lazy&lt;T, F&gt;","synthetic":false,"types":[]}];
implementors["openssl"] = [{"text":"impl Deref for Asn1GeneralizedTime","synthetic":false,"types":[]},{"text":"impl Deref for Asn1Time","synthetic":false,"types":[]},{"text":"impl Deref for Asn1String","synthetic":false,"types":[]},{"text":"impl Deref for Asn1Integer","synthetic":false,"types":[]},{"text":"impl Deref for Asn1BitString","synthetic":false,"types":[]},{"text":"impl Deref for Asn1Object","synthetic":false,"types":[]},{"text":"impl Deref for BigNumContext","synthetic":false,"types":[]},{"text":"impl Deref for BigNum","synthetic":false,"types":[]},{"text":"impl Deref for CmsContentInfo","synthetic":false,"types":[]},{"text":"impl Deref for Conf","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Deref for Dh&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Deref for Dsa&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Deref for EcGroup","synthetic":false,"types":[]},{"text":"impl Deref for EcPoint","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Deref for EcKey&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Deref for EcdsaSig","synthetic":false,"types":[]},{"text":"impl Deref for DigestBytes","synthetic":false,"types":[]},{"text":"impl Deref for OcspBasicResponse","synthetic":false,"types":[]},{"text":"impl Deref for OcspCertId","synthetic":false,"types":[]},{"text":"impl Deref for OcspResponse","synthetic":false,"types":[]},{"text":"impl Deref for OcspRequest","synthetic":false,"types":[]},{"text":"impl Deref for OcspOneReq","synthetic":false,"types":[]},{"text":"impl Deref for Pkcs12","synthetic":false,"types":[]},{"text":"impl Deref for Pkcs7","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Deref for PKey&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Deref for Rsa&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Deref for SrtpProtectionProfile","synthetic":false,"types":[]},{"text":"impl Deref for SslConnectorBuilder","synthetic":false,"types":[]},{"text":"impl Deref for ConnectConfiguration","synthetic":false,"types":[]},{"text":"impl Deref for SslAcceptorBuilder","synthetic":false,"types":[]},{"text":"impl Deref for SslContext","synthetic":false,"types":[]},{"text":"impl Deref for SslCipher","synthetic":false,"types":[]},{"text":"impl Deref for SslSession","synthetic":false,"types":[]},{"text":"impl Deref for Ssl","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Stackable&gt; Deref for Stack&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Deref for OpensslString","synthetic":false,"types":[]},{"text":"impl Deref for OpensslStringRef","synthetic":false,"types":[]},{"text":"impl Deref for X509VerifyParam","synthetic":false,"types":[]},{"text":"impl Deref for X509StoreBuilder","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Deref for X509Lookup&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Deref for X509LookupMethod&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Deref for X509Store","synthetic":false,"types":[]},{"text":"impl Deref for X509StoreContext","synthetic":false,"types":[]},{"text":"impl Deref for X509","synthetic":false,"types":[]},{"text":"impl Deref for X509Extension","synthetic":false,"types":[]},{"text":"impl Deref for X509Name","synthetic":false,"types":[]},{"text":"impl Deref for X509NameEntry","synthetic":false,"types":[]},{"text":"impl Deref for X509Req","synthetic":false,"types":[]},{"text":"impl Deref for GeneralName","synthetic":false,"types":[]},{"text":"impl Deref for X509Algorithm","synthetic":false,"types":[]},{"text":"impl Deref for X509Object","synthetic":false,"types":[]}];
implementors["petgraph"] = [{"text":"impl&lt;'a, G&gt; Deref for Frozen&lt;'a, G&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'b, T&gt; Deref for Ptr&lt;'b, T&gt;","synthetic":false,"types":[]}];
implementors["regex_syntax"] = [{"text":"impl Deref for Literal","synthetic":false,"types":[]}];
implementors["scopeguard"] = [{"text":"impl&lt;T, F, S&gt; Deref for ScopeGuard&lt;T, F, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: FnOnce(T),<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Strategy,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["sized_chunks"] = [{"text":"impl&lt;A, T&gt; Deref for InlineArray&lt;A, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;A, N&gt; Deref for Chunk&lt;A, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: ChunkLength&lt;A&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["smallvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; Deref for SmallVec&lt;A&gt;","synthetic":false,"types":[]}];
implementors["supercow"] = [{"text":"impl&lt;'a, P&gt; Deref for Ref&lt;'a, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: RefParent + 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, OWNED, BORROWED:&nbsp;?Sized, SHARED, STORAGE, PTR&gt; Deref for Supercow&lt;'a, OWNED, BORROWED, SHARED, STORAGE, PTR&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BORROWED: 'a,<br>&nbsp;&nbsp;&nbsp;&nbsp;*const BORROWED: PointerFirstRef,<br>&nbsp;&nbsp;&nbsp;&nbsp;STORAGE: OwnedStorage&lt;OWNED, SHARED&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;PTR: PtrWrite&lt;BORROWED&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;PTR: PtrRead&lt;BORROWED&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["syn"] = [{"text":"impl Deref for Underscore","synthetic":false,"types":[]},{"text":"impl Deref for Add","synthetic":false,"types":[]},{"text":"impl Deref for And","synthetic":false,"types":[]},{"text":"impl Deref for At","synthetic":false,"types":[]},{"text":"impl Deref for Bang","synthetic":false,"types":[]},{"text":"impl Deref for Caret","synthetic":false,"types":[]},{"text":"impl Deref for Colon","synthetic":false,"types":[]},{"text":"impl Deref for Comma","synthetic":false,"types":[]},{"text":"impl Deref for Div","synthetic":false,"types":[]},{"text":"impl Deref for Dollar","synthetic":false,"types":[]},{"text":"impl Deref for Dot","synthetic":false,"types":[]},{"text":"impl Deref for Eq","synthetic":false,"types":[]},{"text":"impl Deref for Gt","synthetic":false,"types":[]},{"text":"impl Deref for Lt","synthetic":false,"types":[]},{"text":"impl Deref for Or","synthetic":false,"types":[]},{"text":"impl Deref for Pound","synthetic":false,"types":[]},{"text":"impl Deref for Question","synthetic":false,"types":[]},{"text":"impl Deref for Rem","synthetic":false,"types":[]},{"text":"impl Deref for Semi","synthetic":false,"types":[]},{"text":"impl Deref for Star","synthetic":false,"types":[]},{"text":"impl Deref for Sub","synthetic":false,"types":[]},{"text":"impl Deref for Tilde","synthetic":false,"types":[]},{"text":"impl&lt;'c, 'a&gt; Deref for StepCursor&lt;'c, 'a&gt;","synthetic":false,"types":[]}];
implementors["tempfile"] = [{"text":"impl Deref for TempPath","synthetic":false,"types":[]}];
implementors["tinyvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; Deref for ArrayVec&lt;A&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'s, T&gt; Deref for SliceVec&lt;'s, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;A:&nbsp;Array&gt; Deref for TinyVec&lt;A&gt;","synthetic":false,"types":[]}];
implementors["zeroize"] = [{"text":"impl&lt;Z&gt; Deref for Zeroizing&lt;Z&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Z: Zeroize,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()